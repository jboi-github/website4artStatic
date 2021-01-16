from sys import argv
import json
import pathlib

def process(dir, item):
	print(
		'''
		<image:image>
			<image:loc>https://{}/{}/800/{}.jpg</image:loc>
			<image:title>{}</image:title>
			<image:caption>{}</image:caption>
		</image:image>
		'''.format(
			'www.marieboiselle.com', dir,
			item['full'],
			item['title'],
			item['material']
	))

def processIn(dir):
	with open('./public/config/{}.json'.format(dir)) as jsonInf:
		jsonIn = json.load(jsonInf)

		for item in jsonIn:
			process(dir, item)

def main():
	print(
		'''
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
				xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
			<url>
				<loc>{}</loc>
		'''.format('https://marieboiselle.com'))

	processIn('gallery')
	processIn('impressions')

	print(
		'''
			</url>
		</urlset>
		'''
	)
	
if __name__ == "__main__":
	main()
