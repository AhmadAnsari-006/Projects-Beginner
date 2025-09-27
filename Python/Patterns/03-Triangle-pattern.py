n = int(input("Enter length of pattern: "))
for i in range(1, n+1):
    # Print spaces
    for j in range(n - i):
        print(" ", end=" ")
    # Print stars
    for k in range(i):
        print("*", end=" ")
    print()