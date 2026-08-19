# # functions

# # funciton declaration
# def greet():
#     print("hello welcome to world of python!!")

# # function call or invoke
# greet()

# # function with parameters and aurguments
# def say_message(name): #here the name is parameter
#     print('hello, welcome '+name)

# say_message('Hemasai') # here the value is aurgument

# # function with return
# def hello(name):
#     return 'Hello ' + name

# print(hello('hemasai'))

# # positional aurg & keyword aurg

# def math(a,b,c,d):
#     return a + b + c + d

# print(math(10,20, c=50, d=30)) # here the values 10,20 are positional aurg and where as c=50,d=30 are keyword aurg and the keyword aurg should follow up the positional aurg

# # only positional aurg
# def add(a,b,c,/): # wiriting / only allows positional aurg
#     return a + b + c

# print(add(1,2,2))

# # variable length positional aurg
# def var_len_pos(*pos):
#     print(sum(pos))

# var_len_pos(10, 20, 30, 40)  # you can pass any number of positional aurg

# # only keyword aurg
# def sub(*,a,b,c,d):
#     return a - b - c - d

# print(sub(a=40,b=20,c=15,d=5)) # it only accepts keyword aurg

# # variable length keyword aurg
# def var_len_kw(**kwarg):
#     print(kwarg)

# var_len_kw(a=52,b=20,c=80,d=90,e=55,f=65)

# # nested functions
# def outter(name):
#     print(f"hello {name}, this is outter function.")
#     def inner():
#         print('This is inner function.')
#     inner()

# outter('Hemasai')


# # reduce
# from functools import reduce
# l = [1,2,3,4,5,6,7,8,9]
# result = reduce(lambda total, num: total + num, l,0)

# print(result)

# # filter
# even = list(filter(lambda a: a%2==0,l))
# print(even)

# # map
# mul = list(map(lambda a: a**2,l))
# print(mul)



# Random module
# number guessing game

import random

ran_num = random.randint(1, 10)
lifes = 5
score = 0

while lifes>=0:
    guess_num = int(input("Guess a number betweeb 1-10: "))
    print()
    if guess_num == ran_num:
        print("Saaaaabhaaash!!\n")
        score += 1
        print(f"Your score is {score}\n")
        ran_num = random.randint(1, 10)
    elif lifes == 0:
        print(''' 
        thappu chepinav bhai
        Khatam Tata Bye bye!
        ''')
        lifes -=1
    else:
        print("\nmalla try chey bhAAAi !!\n")
        lifes -= 1
        print(f"Inka {lifes} live/s vunaee ra betey.\n")
        if guess_num > ran_num:
            print("mari ekkuva aendi bhai num tagginchu!\n")
        else:
            print("mari takkuva aendi bhai num penchu!\n")


print(f"Your total score is : {score}\n")


# rolling dice

dice = random.randint(1,6)

print("\nrolling dice....")
print(dice)
print()



# password generation
import string

gen_passw = ''
password_values = string.ascii_letters + string.digits + "!@#$%&*^"

for i in range(1,17):
    gen_passw += random.choice(password_values)
print(gen_passw) 
print()



# OTP generation
gen_otp = ''
otp = string.digits
for i in range(1,7):
    gen_otp += random.choice(otp)

print(gen_otp)
print()



# captcha
gen_cpt = ''
captcha = string.ascii_letters + string.digits
for i in range(1,5):
    gen_cpt += random.choice(captcha)

print(gen_cpt)
print()

# Distributing cards to 4 players

cards = [   "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH", 
            "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD",
            "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
            "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS"
        ]

random.shuffle(cards)

player1 = cards[0:13]
player2 = cards[13:26]
player3 = cards[26:39]
player4 = cards[39:52]

print(f'''
        Atagadu 1: {player1},
        Atagadu 2: {player2},
        Atagadu 3: {player3},
        Atagadu 4: {player4}
    ''')