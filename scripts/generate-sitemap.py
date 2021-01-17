from sys import argv
import json
import pathlib
from datetime import datetime

def getSite():
	with open('./public/config/profile.json') as jsonInf:
		jsonIn = json.load(jsonInf)
		return jsonIn['site']

def processItem(site, dir, item):
	print('    <image:image>')
	print('      <image:loc>{}/{}/800/{}.jpg</image:loc>'.format(site, dir, item['full']))
	if item['title'] > '':
		print('      <image:title>{}</image:title>'.format(item['title']))
	if item['material'] > '':
		print('      <image:caption>{}</image:caption>'.format(item['material']))
	print('    </image:image>')

def processDir(site, dir):
	print('  <url>')
	print('    <loc>{}/{}</loc>'.format(site, dir))
	print('    <lastmod>{}</lastmod>'.format(datetime.today().strftime('%Y-%m-%d')))
	print('    <changefreq>weekly</changefreq>')

	with open('./public/config/{}.json'.format(dir)) as jsonInf:
		jsonIn = json.load(jsonInf)

		for item in jsonIn:
			processItem(site, dir, item)
	print('  </url>')

def main():
	print('''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
		xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">''')

	site = getSite()
	processDir(site, 'gallery')
	processDir(site, 'impressions')

	print('</urlset>')
	
if __name__ == "__main__":
	main()
	