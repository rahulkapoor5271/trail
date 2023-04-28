word = input("Enter a word: ")
letter_count = 0
for letter in word:
    if letter.isalpha():
        letter_count += 1,

print("The number of letters in the word is:", letter_count)
