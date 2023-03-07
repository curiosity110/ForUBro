from django.contrib.auth import get_user_model

User = get_user_model()


def validate_registration(email, data):
    user = User.objects.get(email=email)
    # user['password'] = data['password'] # DON'T DO THIS
    user.set_password(data['password'])
    user.save()
