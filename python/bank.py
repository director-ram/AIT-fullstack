# Name = input("Enter your name: ")
# username = input("Enter your username: ")
# password = input("Enter your password: ")
# Balance = int(input("Enter your current balance: "))
# print("Registered Successfully!!")
# print()
# print("===Enter  login details===")
# uname = input("Enter your username: ")
# pas = input("Enter your password: ")

# if uname == username and pas == password:
#     print("Logini Successful!")
#     print()
#     print("--- welcome to bankAnteGudi ---")
#     while True:
#         print('''
#             === select a option ===
#             1. Deposite
#             2. Withdraw
#             3. Balance Enquiry
#             4. Exit
#         ''')
#         choice = int(input("Enter option from above: "))
#         print()
#         match choice:
#             case 1:
#                 Damount = int(input("Enter the deposite amount: "))
#                 Balance += Damount
#                 print(Damount," has been deposited successfully! and current balance is ", Balance)
#                 print()
#             case 2:
#                 Wamount = int(input("Enter the withdraw amount: "))
#                 if Balance >= Wamount:
#                     Balance -= Wamount
#                     print(Wamount," has withdrawn successful!! and current balance is ", Balance)
#                     print()
#                 else:
#                     print("Insufficient Funds!!")
#                     print()
#             case 3:
#                 print("Current Balance is ", Balance)
#                 print()
#             case 4:
#                 break
# else:
#     print("Invalid Login Details")







# banking application with functions and multiple users
users = []

username = ''
password = ''
user_id = 0
# user_found = False

def deposite(amount):
    users[user_id]["balance"] += amount
    return users[user_id]["balance"]

def withdraw(amount):
    if users[user_id]["balance"] >= amount:
        users[user_id]["balance"] -= amount
        print(f"The {amount} has been withdrawn successfully!!")
        return f"The current balance after withdraw is {users[user_id]["balance"]}"
    else:
        return "Insufficient Funds"

def balance():
    return users[user_id]["balance"]


while True:
    print('''
    1. Login In
    2. Sign Up
    3. Exit
''')
    auth = int(input(" Enter one for login & two for signup or three for exit: "))
    if auth == 1:
        print("\n --- Enter login details ---\n")
        username = input('Enter username: ')
        password = input('Enter your password: ')

        for index, user in enumerate(users):
            if user["username"] == username and user["password"] == password:
                print('Login successful!!')
                # user_found = True
                user_id = index
                while True:
                    print('''
                        ===== Welcome To Bank AnteGudi ======
                            1. Deposite
                            2. Withdraw
                            3. Balance Enquiry
                            4. Exit
                    ''')

                    choice = int(input("Enter your choice from above: "))
                    print()

                    match choice:
                        case 1:
                            amount = int(input("Enter the amount to deposite: "))
                            print(f'The deposite of {amount} has been done successfully!!')
                            print("The current balance is ",deposite(amount))
                            print()
                        case 2:
                            amount = int(input("Enter the amount to withdraw: "))
                            print(withdraw(amount))
                            print()
                        case 3:
                            print("The current balance is ",balance())
                            print()
                        case 4:
                            print("Thanks for visiting Bank AnteGudi!!")
                            user_found = False
                            break
                        case _:
                            print("please enter valid choice from above!!")
                break
            else:
                print("Invalid username or password!")
    elif auth == 2:
        print("\n --- Enter signup details --- \n")
        initial_name = input("Enter username: ")
        initial_password = input("Enter password: ")
        initial_balance = int(input("Enter your Balance: "))
        users.append({
            "username": initial_name,
            "password": initial_password,
            "balance": initial_balance
        })
        print("Registered successfully!!")
        print()
    elif auth == 3:
        print("Come back again!!")
        break
    else:
        print("Invalid option")