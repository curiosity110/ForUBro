class Parent:
    def say_hello(self):
        print('hello from parent')

    def output(self):
        return {1: 'one', 2: [1, 2, 3]}


parent = Parent()
# parent.say_hello()


class Child(Parent):
    def say_hello(self):
        super().say_hello()
        print('hello from child')

    def output(self):
        default_output = super().output()
        default_output[2] = ['one', 'two', 'three']
        return default_output


child = Child()
child.say_hello()

print(child.output())
