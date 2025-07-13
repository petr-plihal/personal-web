AUTHOR = 'Petr Plíhal'
SITENAME = 'Petr Plíhal'
SITEURL = ""

PATH = "content"

TIMEZONE = 'Europe/Prague'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = False

# Disable generation of unnecessary files
DIRECT_TEMPLATES = ['index']  # Only generate index.html
PAGINATED_TEMPLATES = {}      # No pagination

# Disable article-related pages since you're not using articles yet
ARTICLE_SAVE_AS = ''
ARTICLE_URL = ''
DRAFT_SAVE_AS = ''
DRAFT_URL = ''
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
TAG_SAVE_AS = ''
ARCHIVES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''

# Multilingual support
I18N_SUBSITES = {
    'cs': {
        'SITENAME': 'Petr Plíhal',
        'LOCALE': 'cs_CZ.UTF-8',
    }
}

# Plugin for i18n_subsites (might be useful later)
# PLUGINS = ['i18n_subsites']

# Language URL patterns
PAGE_LANG_URL = '{lang}/pages/{slug}.html'
PAGE_LANG_SAVE_AS = '{lang}/pages/{slug}.html'

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
