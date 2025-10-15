n = int(input("Enter length of pattern: "))
# Top part (pyramid)
for i in range(n):
    for j in range(2*n-1):
        if n-i-1 <= j <= n+i-1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
# Bottom part (inverted pyramid)
for i in range(n-2,-1,-1):
    for j in range(2*n-1):
        if n-i-1 <= j <= n+i-1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()