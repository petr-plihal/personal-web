# Portfolio website

## Description
Dev environment and contents of my static website acting as personal portfolio.

The website is built using:
- HTML 
- CSS
- JavaScript
- Bootstrap

The hosting is done with [GitHub Pages](https://pages.github.com/) using my owned domain registered at [Vedos registrar](https://vedos.cz/domeny/).

---

## Usage

### Dependencies and prerequisites

- `npm` package manager - for generating Bootstrap files
- Python - for virtual environment and Pelican
- `gettext` package - for generating message catalog files (`*.po`, `*mo`), if they aren't already, or in case of changes

### Setup

The setup is only meant for setting up different web but with same dependencies. 
Since I just copied all necessary Bootstrap files into the `docs/bootstrap/` directory, no extra setup is needed, outside of cloning the repository.
The following lines serve more as a track of the changes made for the web to work correctly.

1. Clone the repository
   ```bash
   git clone git@github.com:petr-plihal/personal-web.git
   cd personal-web
   ```

2. Install dependencies

   Install npm packages:
   ```bash
   npm install
   ```

   Create and activate virtual environment and install packages:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. Copy necessary generated Bootstrap files.

    1. CSS and JavaScript files
       ```bash
       cp node_modules/bootstrap/dist/css/bootstrap.min.css docs/bootstrap/css/
       cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js docs/bootstrap/js/
       ```
    2. Icons
       ```bash
       cp node_modules/bootstrap-icons/font/bootstrap-icons.min.css docs/bootstrap/icons/
       cp -r node_modules/bootstrap-icons/font/fonts docs/bootstrap/icons/
       ```

---

## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.