from PIL import Image
from sys import argv
import json
import pathlib

SIZES = [5000, 3000, 2000, 1600, 800, 200]

def resize(dir, fname, size):
	''' Read, resize and save image in gallery '''
	print('{} -> {}'.format(fname, size), end='')
	finName = './public/{}/original/{}.jpg'.format(dir, fname)
	foutDir = './public/{}/{}'.format(dir, size)
	foutName = '{}/{}.jpg'.format(foutDir, fname)

	with open(finName, "rb") as f:
		with Image.open(f) as img:
			width, height = img.size
			newWidth = int(size if width < height else width * size / height)
			newHeight = int(size if height < width else height * size / width)
			
			img.thumbnail([newWidth, newHeight])

			pathlib.Path(foutDir).mkdir(parents=True, exist_ok=True)
			img.save(foutName, img.format)

			print(' -> {}x{}'.format(img.size[0], img.size[1]))
			return {'size': size, 'width': img.size[0]}

def process(dir, item):
	# Add srcSet object with resized objects
	item['srcSet']= [resize(dir, item['full'], size) for size in SIZES]
	return item

def processIn(dir):
	with open('./public/config/{}.json'.format(dir)) as jsonInf:
		jsonIn = json.load(jsonInf)
		jsonOut = [process(dir, item) for item in jsonIn]
		return jsonOut

def processOut(dir, jsonOut):
	with open('./public/config/{}.json'.format(dir), 'w') as jsonOutf:
		json.dump(jsonOut, jsonOutf, sort_keys=True, indent=4)

def main():
	jsonOut = processIn('gallery')
	processOut('gallery', jsonOut)
	jsonOut = processIn('impressions')
	processOut('impressions', jsonOut)

if __name__ == "__main__":
	main()
