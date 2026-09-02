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



# file handaling


# to create a file
# file_create = open("newfile.txt","w")
# file_create.write("Hemasai")
# file_create.close()


# to read a file
# f = open("newfile.txt", "r")
# print(f.read())



# Regular Expressions

import re

# text = "Hello, my name is Hemasai and I am a student of Computer Science and Engineering"

# res  =  re.search("Hemasai",text)
# print(res.group())

# res1 = re.findall("Hemasai",text)
# print(res1)

# res2 = re.match("Hemasai",text)
# print(res2)

# res3 = re.sub("Hemasai","Sai",text)
# print(res3)

# res4 = re.fullmatch("Hemasai",text)
# print(res4)

# pattren matching
# ^ - starts with
# $ - ends with
# * - 0 or more
# + - 1 or more
# ? - 0 or 1
# {n} - exactly n times
# {n,m} - between n and m times
# {n,} - at least n times
# {,m} - at most m times
# [] - any character in the range
# [^] - any character not in the range
# () - exact match
# \d - any digit
# \w - any word character
# \s - any whitespace character
# \b - any word boundary
# \A - any character at the beginning
# \Z - any character at the end
# \n - any newline character
# \r - any carriage return character
# \t - any tab character
# \f - any form feed character
# \v - any vertical tab character
# \a - any alert character

# password_pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
# user_password = input("Enter your password: ")
# if re.match(password_pattern, user_password):
#     print("Password is valid")
# else:
#     print("Password is invalid")



# multithreading
# from threading import Thread,Lock,Semaphore
# from queue import Queue
# import time
# def task1():
#     semaphore.acquire()
#     print("Task 1 started")
#     time.sleep(1)
#     print("Task 1 finished")
#     semaphore.release()
# def task2():
#     semaphore.acquire()
#     print("Task 2 started")
#     time.sleep(1)
#     print("Task 2 finished")
#     semaphore.release()
# lock = Lock()

# thread1 = Thread(target=task1)
# thread2 = Thread(target=task2)
# thread1.start()
# thread2.start()
# thread1.join()
# thread2.join()
# print("All tasks finished")

# def task3():
#     semaphore.acquire()
#     print("Task 3 started")
#     time.sleep(1)
#     print("Task 3 finished")
#     semaphore.release()
# semaphore = Semaphore(2)
# thread1 = Thread(target=task1)
# thread2 = Thread(target=task2)
# thread3 = Thread(target=task3)
# thread1.start()
# thread2.start()
# thread3.start()
# thread1.join()
# thread2.join()
# thread3.join()
# print("All tasks finished")

# def task4():
#     semaphore.acquire()
#     print("Task 4 started")
#     time.sleep(1)
#     print("Task 4 finished")
#     semaphore.release()
# semaphore = Semaphore(2)

# def task5():
#     queue.put("Task 5 started")
#     time.sleep(1)
#     print("Task 5 finished")
#     queue.task_done()
# def task6():
#     queue.put("Task 6 started")
#     time.sleep(1)
#     print("Task 6 finished")
#     queue.task_done()
# queue = Queue()
# thread1 = Thread(target=task5)
# thread2 = Thread(target=task6)
# thread1.start()
# thread2.start()
# thread1.join()
# thread2.join()
# print("All tasks finished")
# print(queue.get())
# print(queue.get())