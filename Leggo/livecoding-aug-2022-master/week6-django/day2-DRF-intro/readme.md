# Questions, repetitions

## Setup

### Environment
1. write requirements
2. create environment
3. activate environment
4. add version to requirements file

### PyCharm setup step 1
1. set project interpreter with created environment

### Create django project
1. Create project with `django-admin startproject project .`
2. Test if it works `python manage.py runserver`

### PyCharm setup step 2
1. enable django support
2. create configuration (runserver, makemigrations, migrate, createsuperuser)

### Prepare database
1. run `python manage.py migrate`
2. double-click db.sqlite3 file to setup PyCharm connection/inspection

### Prepare apps
1. Visualize database with PonyORM https://editor.ponyorm.com
2. create apps with `python manage.py startapp nameOfYourApp`
3. add apps to INSTALLED_APPS in settings.py

### Create models
1. in models.py
2. makemigrations
3. migrate

