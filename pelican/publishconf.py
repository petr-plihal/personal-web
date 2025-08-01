# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))) # Add directory to path to allow access to pelicanconf.py
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = "https://petr-plihal.eu"
RELATIVE_URLS = False

# Override output path for GitHub Actions deployment
OUTPUT_PATH = "output"

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"

DELETE_OUTPUT_DIRECTORY = True

# Custom GA4 implementation
GOOGLE_ANALYTICS_ID = "G-QWF3EXGP99"
