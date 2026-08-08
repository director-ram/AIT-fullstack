# from functools import reduce

users = []
user_id = 0


def groceries():
        print("\n You selected Groceries\n")

        while True:
            print('''
                ==================
                |
                |     1. Tomato - ₹60/kg
                |     2. Potato - ₹40/kg
                |     3. Onion - ₹80/kg
                |     4. Back
                |
                ==================
        ''')
            choice = int(input("\n Enter your choice from above: \n"))
            match choice:
                case 1:
                    quantity = int(input("Enter the quantity of tomatoes you want: "))
                    if quantity > 0:
                        total_price = quantity * 60
                        users[user_id]["cart"].append({
                            "item" : "Tomato",
                            "quantity" : quantity,
                            "price" : total_price
                        })
                        print("\n The price of ", quantity, " of tomatoes is ₹", total_price)
                    else:
                        print("\n Quantity should greater than zero \n")

                case 2:
                    quantity = int(input("Enter the quantity of potatoes you want: "))
                    total_price = quantity * 40
                    if quantity > 0:
                        users[user_id]["cart"].append({
                            "item" : "Potato",
                            "quantity" : quantity,
                            "price" : total_price
                        })
                        print("\n The price of ", quantity, " of potatoes is ₹", total_price)
                    else:
                        print("\n Quantity should greater than zero \n")
                case 3:
                    quantity = int(input("Enter the quantity of onions you want: "))
                    if quantity > 0:
                        total_price = quantity * 80
                        users[user_id]["cart"].append({
                            "item" : "Onion",
                            "quantity" : quantity,
                            "price" : total_price
                        })
                        print("\n The price of ", quantity, " of onions is ₹", total_price)
                    else:
                        print("\n Quantity should greater than zero \n")
                case 4:
                    break
                case _:
                    print("\n Invalid choice\n")


def mobiles():
    print("\n You selected Mobiles\n")
    while True:
        print('''
                ==================
                |
                |     1. Samsung s26 - ₹1,50,000
                |     2. iPhone - ₹1,00,000
                |     3. Realme - ₹30,000
                |     4. Back
                |
                ==================
        ''')
        choice = int(input("\n Enter your choice from above: \n"))
        match choice:
            case 1:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 150000
                    users[user_id]["cart"].append({
                                        "item" : "Samsung s26",
                                        "quantity" : quantity,
                                        "price" : total_price
                                    })
                    print("\n The price of ", quantity, " of Samsung s26 is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 2:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 100000
                    users[user_id]["cart"].append({
                                        "item" : "iphone",
                                    "quantity" : quantity,
                                    "price" : total_price
                                })
                    print("\n The price of ", quantity, " of iphone is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 3:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 30000
                    users[user_id]["cart"].append({
                                        "item" : "Realme",
                                        "quantity" : quantity,
                                    "price" : total_price
                                })
                    print("\n The price of ", quantity, " of Realme is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 4:
                break
            case _:
                print("\n Invalid choice\n")

def cloths():
    print("\n You selected Cloths\n")
    
    while True:
        print('''
                ==================
                |
                |     1. Hoodie - ₹999
                |     2. Jeans - ₹1,999
                |     3. T-Shirt - ₹499
                |     4. Back
                |
                ==================
        ''')
        choice = int(input("\n Enter your choice from above: \n"))
        match choice:
            case 1:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 999
                    users[user_id]["cart"].append({
                                        "item" : "Hoodie",
                                        "quantity" : quantity,
                                        "price" : total_price
                                    })
                    print("\n The price of ", quantity, " Hoodie is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 2:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 1999
                    users[user_id]["cart"].append({
                                        "item" : "Jeans",
                                        "quantity" : quantity,
                                        "price" : total_price
                                    })
                    print("\n The price of ", quantity, " Jeans is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 3:
                quantity = int(input("Enter the quantity you want: "))
                if quantity > 0:
                    total_price = quantity * 499
                    users[user_id]["cart"].append({
                                        "item" : "T-shirt",
                                        "quantity" : quantity,
                                        "price" : total_price
                                    })
                    print("\n The price of ", quantity, " T-shirt is ₹", total_price)
                else:
                    print("\n Quantity should greater than zero \n")
            case 4:
                break
            case _:
                print("\n Invalid choice\n")

def cart():
    if(users[user_id]["cart"]):
        total_price = 0
        for i in users[user_id]["cart"]:
                total_price += i["price"]
        print("The total price of the cart is: ",total_price)
    else:
        print("cart is empty please add any products!!")


def payment():
    if(users[user_id]["cart"]):
        total_price = 0
        for i in users[user_id]["cart"]:
                total_price += i["price"]

        print('''
                === Payment Options ===
                1. Credit Card
                2. Debit Card
                3. UPI
        ''')
        pay = int(input("Enter the payment way from above: "))
        match pay:
            case 1:
                print(f"\n You paid amount of {total_price} via Credit Card!!\n")
            case 2:
                print(f"\n You paid amount of {total_price} via Debit Card!!\n")
            case 3:
                print(f"\n You paid amount of {total_price} via UPI!!\n")
        users[user_id]["cart"].clear()
    else:
        print("cart is empty please add any products!!")

while True:
    print('''
    === Welcome to PythonStore ===
        1. Login In
        2. Sign Up
        3. Exit
    ''')
    option = int(input("\n Enter 1 for login & 2 for signup or 3 for exit: \n"))

    if option == 1:
        u_name = input("Enter your username: ")
        u_password = input("Enter your password: ")
        for index,user in enumerate(users):
            if u_name == user["username"] and u_password == user["password"]:
                user_id = index
                print("\n Login successfully!! \n")
                while True:
                    print('''
                    ==== Welcome to PythonStore ====
                        1. Groceries
                        2. Mobiles
                        3. cloths
                        4. cart
                        5. Payment
                        6. Exit
                    ''')

                    choice = int(input("\nEnter your choice from above: \n"))
                    match choice:
                        case 1:
                            groceries()
                        case 2:
                            mobiles()
                        case 3:
                            cloths()
                        case 4:
                            cart()
                        case 5:
                            payment()
                        case 6:
                            print("\n Thanks for visiting PythonStore\n")
                            break
                        case _:
                            print("\n Invalid choice\n")
                break
            else:
                print("\n Invalid username or password! \n")
    elif option == 2:
        init_username = input("Enter your username: ")
        init_password = input("Enter your password: ")
        if any(user["username"] == init_username for user in users):
            print("\n Username already exists!! \n")
        else:
            users.append({
                        "username" : init_username,
                        "password" : init_password,
                        "cart" : []
                    })
            print("\n Sign Up  successfully!! \n")
    elif option == 3:
        print("\n Visit again!! \n")
        break
    else:
        print("Invalid option")