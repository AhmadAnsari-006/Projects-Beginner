s = input("Enter your word: ")  # Read input string
print("Yes" if s.lower() == s[::-1].lower() else "No")