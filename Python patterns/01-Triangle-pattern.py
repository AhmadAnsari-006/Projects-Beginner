n=int(input("Enter length of pattern :"))
for i in range(n):
  for j in range(i+1):
    print("*", end=" ")
  print()