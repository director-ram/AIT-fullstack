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
import os
import csv

username = ''
password = ''
user_id = 0
users_file = 'users.csv'
# user_found = False


def load_users():
    if  not os.path.exists(users_file):
        return []
    with open(users_file, 'r', newline="") as file:
        reader = csv.DictReader(file)
        loaded = []
        for row in reader:
            loaded.append({
                "username": row["username"],
                "password": row["password"],
                "balance": int(row["balance"])
            })
    return loaded
def save_users():
    with open(users_file, 'w', newline="") as file:
        writer = csv.DictWriter(file, fieldnames=["username", "password", "balance"])
        writer.writeheader()
        for user in users:
            writer.writerow({
                "username": user["username"],
                "password": user["password"],
                "balance": user["balance"]
            })

users = load_users()

def deposite(amount):
    users[user_id]["balance"] += amount
    save_users()
    return users[user_id]["balance"]

def withdraw(amount):
    if users[user_id]["balance"] >= amount:
        users[user_id]["balance"] -= amount
        save_users()
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

    users = load_users()
    auth = int(input(" Enter one for login & two for signup or three for exit: ").strip())
    if auth == 1:
        print("\n --- Enter login details ---\n")
        username = input('Enter username: ').strip()
        password = input('Enter your password: ').strip()

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

                    choice = int(input("Enter your choice from above: ").strip())
                    print()

                    match choice:
                        case 1:
                            amount = int(input("Enter the amount to deposite: ").strip())
                            print(f'The deposite of {amount} has been done successfully!!')
                            print("The current balance is ",deposite(amount))
                            print()
                        case 2:
                            amount = int(input("Enter the amount to withdraw: ").strip())
                            print(withdraw(amount))
                            print()
                        case 3:
                            print("The current balance is ",balance())
                            print()
                        case 4:
                            print("Thanks for visiting Bank AnteGudi!!")
                            # user_found = False
                            break
                        case _:
                            print("please enter valid choice from above!!")
                break
        else:
                print("Invalid username or password!")
    elif auth == 2:
        print("\n --- Enter signup details --- \n")
        initial_name = input("Enter username: ").strip()
        initial_password = input("Enter password: ").strip()
        initial_balance = int(input("Enter your Balance: ").strip())
        if any(user["username"] == initial_name for user in users):
            print("Username already exists!!")
        else:
            users.append({
                "username": initial_name,
                "password": initial_password,
                "balance": initial_balance
            })
            save_users()
            print("Registered successfully!!")
        print()
    elif auth == 3:
        print("Come back again!!")
        break
    else:
        print("Invalid option")