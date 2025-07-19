n=int(input("Enter length of pattern :"))
print()
'''This code prints a pattern of diamond in two parts:'''
for i in range(n):
  print(" " * (n - i - 1), end="")
  print("* " * (i + 1))
for i in range(n - 2, -1, -1):
    print(" " * (n - i - 1), end="")
    print("* " * (i + 1))