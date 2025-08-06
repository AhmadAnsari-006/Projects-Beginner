import time 
def vigenere(message, key, direction=1):
    key_index = 0
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    final_message = ''
    for char in message.lower():
        # Append any non-letter character to the message
        if not char.isalpha():
            final_message += char
        else:        
            # Find the right key character to encode/decode
            key_char = key[key_index % len(key)]
            key_index += 1

            # Define the offset and the encrypted/decrypted letter
            offset = alphabet.index(key_char)
            index = alphabet.find(char)
            new_index = (index + offset * direction) % len(alphabet)
            final_message += alphabet[new_index]
    
    return final_message
def encrypt(message, key):
    return vigenere(message, key) 
def decrypt(message, key):
    return vigenere(message, key, -1)

while True:
    a = str(input("Do you want to encrypt, decrypt, or exit? "))
    if a.lower() == 'encrypt':#encryption work is being done
        encrypted_text = str(input("Enter unencrypted message: "))
        custom_key = str(input("Enter encryption key: "))
        encryption = encrypt(encrypted_text, custom_key)
        print(f'\nEncrypted text: {encrypted_text}')
        print(f'Key: {custom_key}')
        print(f'\nEncrypted text: {encryption}\n')
    elif a.lower() == 'decrypt':#decrpytion work is being done
        encrypted_text = str(input("Enter encrypted message: "))
        custom_key = str(input("Enter encryption key: "))
        decryption = decrypt(encrypted_text, custom_key)
        print(f'\nEncrypted text: {encrypted_text}')
        print(f'Key: {custom_key}')
        print(f'\nDecrypted text: {decryption}\n')
    elif a.lower() == 'exit':
        print("Exiting the program ......")
        time.sleep(3)
        print("Exited the program successfully!")
        break
    else: 
        print("Please check what you want to do!")
