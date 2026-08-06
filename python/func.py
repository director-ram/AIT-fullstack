# functions

# funciton declaration
def greet():
    print("hello welcome to world of python!!")

# function call or invoke
greet()

# function with parameters and aurguments
def say_message(name): #here the name is parameter
    print('hello, welcome '+name)

say_message('Hemasai') # here the value is aurgument

# positional aurg & keyword aurg

def math(a,b,c,d):
    return a + b + c + d

print(math(10,20, c=50, d=30)) # here the values 10,20 are positional aurg and where as c=50,d=30 are keyword aurg and the keyword aurg should follow up the positional aurg

# only positional aurg
def add(a,b,c,/): # wiriting / only allows positional aurg
    return a + b + c

print(add(1,2,2))

# variable length positional aurg
def var_len_pos(*pos):
    print(sum(pos))

var_len_pos(10, 20, 30, 40)  # you can pass any number of positional aurg

# only keyword aurg
def sub(*,a,b,c,d):
    return a - b - c - d

print(sub(a=40,b=20,c=15,d=5)) # it only accepts keyword aurg

# variable length keyword aurg
def var_len_kw(**kwarg):
    print(kwarg)

var_len_kw(a=52,b=20,c=80,d=90,e=55,f=65)

# nested functions
def outter(name):
    print(f"hello {name}, this is outter function.")
    def inner():
        print('This is inner function.')
    inner()

outter('Hemasai')


# reduce
from functools import reduce
l = [1,2,3,4,5,6,7,8,9]
result = reduce(lambda total, num: total + num, l,0)

print(result)

# filter
even = list(filter(lambda a: a%2==0,l))
print(even)

# map
mul = list(map(lambda a: a**2,l))
print(mul)