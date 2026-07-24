# variables
# example name that stores the name of a user
# name = "Hemasai"

# rules for variables declaration
# 1. Variables names must start with a letter or an underscore
# 2. No space in between
# 3. Case sensitive

# datatypes
# example '12' is a integer so its a 'int' datatype, 
# for text it is 'string', 
# for true or fales values it is 'bool', 
# for decimal numbers it is 'float', 
# for complex numbers it is 'complex'

# operators
# arithmetic operators
# example 12 + 12
# example 12 - 12
# example 12 * 12
# example 12 / 12
# example 12 % 12

#logical operators
# and
# or
# not




# task 22-07-2026

# num = 1234
# rev = 0
# dup_num = num


# #infinite loop
# # while True:
# #     print("laddu kavala nayana!!")

# #traverse the num
# while num>0:
#     res=num%10
#     print(res)
#     num //=10


# #sum up the given digit
# while dup_num>0:
#     res = dup_num % 10
#     rev += res
#     dup_num //= 10
# print("the sum of digits",rev)

# # palindrome with numbers using while loop
# pal = int(input('enter a number: '))
# dup = pal
# revers = 0
# count = 0
# while pal>0:
#     res = pal % 10
#     revers = revers * 10 + res
#     pal //= 10
#     count+=1

# if dup == revers:
#     print(dup,"is a Palindrome")
# else:
#     print(dup,"is not a Palindrome")


# # palindrome with numbers using for loop
# pal = dup
# revers1 = 0
# for i in range(0,count):
#     res = pal % 10
#     revers1 = revers1 * 10 + res
#     pal //= 10
# if dup == revers:
#     print(dup,"is a Palindrome")
# else:
#     print(dup,"is not a Palindrome")


# # palindrome with string using while loop
# text = input('enter a text: ')
# n = len(text)-1
# dup_text = ''
# while n>=0:
#     res = text[n]
#     dup_text = res + dup_text
#     n -= 1
    
# if text == dup_text:
#     print(text,"is a Palindrome")
# else:
#     print(text,"is not a Palindrome")



# # palindrome with string using for loop
# dup_text1 = ''
# for i in range(len(text)-1, -1, -1):
#     dup_text1 += text[i]
# if text == dup_text1:
#     print(text,"is a Palindrome")
# else:
#     print(text,"is not a Palindrome")



# # find number is even or odd
# eod = int(input('enter a number: '))
# if eod%2==0:
#     print(eod,"is even")
# else:
#     print(eod,"is odd")


# # print numbers prime or not from 1 to 100

# i = 2
# while i <= 100:
#     c = 0
#     j = 2                   
#     while j < i:
#         if i % j == 0:      
#             c += 1
#         j += 1
#     if c==0:
#         print(i,"is a prime")
#     i += 1

# # print stars in place of vowels in given string
# a = input("enter a string: ")
# vowels = "aeiouAEIOU"
# i = 0
# while i<len(a):
#     if a[i] in vowels:
#         print("*", end="")
#     else:
#         print(a[i], end="")
#     i+=1
# print()


# task 23-07-2026

# pattren printing

# print square using *

# s = 0

# while s<5:
#     i = 0
#     while i<5:
#         print("*", end=" ")
#         i+=1
#     print()
#     s+=1

# print right angle triangle using *

# t = 1
# while t<6:
#    print(" " * (5-t) + "*" * t)
    # t+=1


# print pyramid

# t = 1
# while t <= 5:
#     print(" " * (5 - t) + "*" * (2*t - 1))
#     t += 1


# usig for loop

# t = 5
# for i in range(t):
#     print(" "*(5-i)+" *"*i)


# use numbers in place of *

# t = 6
# for i in range(t):
#     for j in range(i):
#         print(j+1,end=" ")
#     print()

# using while loop
# t = 0
# while t<6:
#     i = 0
#     while i<t:
#         print(i+1,end='')
#         i+=1
#     print() 
#     t+=1



# # use alphabates instead of numbers

# a = 6
# for i in range(a):
#     for j in range(i):
#         print(chr(j + 65),end=" ")
#     print()


# using while loop

# a = 0
# while a <6:
#     j = 0
#     while j<a:
#         print(chr(j+65),end=" ")
#         j+=1
#     print()
#     a+=1