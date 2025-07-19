n=int(input("Enter length of pattern: "))
for i in range(n):
  for j in range(2*n-1):
    if n-i-1 <= j <= n+i-1:
      print("*" , end=" ")
    else:
      print(" ",end=" ")
  print()