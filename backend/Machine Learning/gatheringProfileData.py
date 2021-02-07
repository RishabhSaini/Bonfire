import requests
import pandas as pd
import time
import random
import re
import numpy as np
import _pickle as pickle
from tqdm import tqdm_notebook as tqdm
from bs4 import BeautifulSoup as bs

seq = [i/10 for i in range(8,18)]
biolist = []

for _ in tqdm(range(1000)):
    page = requests.get("https://www.fakepersongenerator.com/user-biography-generator")
    soup = bs(page.content)

    try:
        bios = soup.find('div', class_='row no-margin for-sign').find_all('p')
        biolist.extend([re.findall('"([^"]*)"', i.text) for i in bios])
    except:
        pass
    time.sleep(random.choice(seq))

bio_df = pd.DataFrame(biolist, columns=['Bios'])

qs = ['Movies',
      'TV',
      'Religion',
      'Music',
      'Sports',
      'Books',
      'Politics']