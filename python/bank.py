Name = input("Enter your name: ")
username = input("Enter your username: ")
password = input("Enter your password: ")
Balance = int(input("Enter your current balance: "))
print("Registered Successfully!!")
print()
print("===Enter  login details===")
uname = input("Enter your username: ")
pas = input("Enter your password: ")

if uname == username and pas == password:
    print("Logini Successful!")
    print()
    print("--- welcome to bankAnteGudi ---")
    while True:
        print('''
            === select a option ===
            1. Deposite
            2. Withdraw
            3. Balance Enquiry
            4. Exit
        ''')
        choice = int(input("Enter option from above: "))
        match choice:
            case 1:
                Damount = int(input("Enter the deposite amount: "))
                Balance += Damount
                print(Damount," has been deposited successfully! and current balance is ", Balance)
                print()
            case 2:
                Wamount = int(input("Enter the withdraw amount: "))
                if Balance >= Wamount:
                    Balance -= Wamount
                    print(Wamount," has withdrawn successful!! and current balance is ", Balance)
                    print()
                else:
                    print("Insufficient Funds!!")
                    print()
            case 3:
                print("Current Balance is ", Balance)
                print()
            case 4:
                break
else:
    print("Invalid Login Details")