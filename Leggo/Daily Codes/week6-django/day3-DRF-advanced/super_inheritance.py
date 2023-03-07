class Parent:
    def get_tasks(self):
        print('from parent')
        return {'do_laundry': True}


parent = Parent()

# print(parent.get_tasks())


class Child(Parent):
    def get_tasks(self):
        representation = super().get_tasks()
        representation['chill'] = True
        return representation

child = Child()

print(child.get_tasks())
