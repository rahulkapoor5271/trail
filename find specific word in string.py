a = input("Enter a string: ")
b = input("Enter a word to search: ")

if b in a:
    print("The word     :-  ", a, 
          "   -:  is present in the string.")
else:
    print("The word :-    ", a, "      -:is not present in the string.")