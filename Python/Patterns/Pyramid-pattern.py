# Python program to print a centered number pyramid pattern

n = int(input(": "))  # Height of the pyramid 
for i in range(1, n + 1):
    row_width = 2 * i - 1
    height = 2 * n - 1
    leading_spaces = (height - row_width) // 2
    print(' ' * leading_spaces, end=' ')
    for j in range(1, i + 1):
        print(j, end='')
    for j in range(i - 1, 0, -1):
        print(j, end='')
    print(" ")
