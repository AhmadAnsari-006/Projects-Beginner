s = input("Enter your word: ")  # Read input string
print("Yes" if s == s[::-1] else "No")