#take age input from the user check if he is 18 for vote or not

a=int(input("enter age:- "))
if(a<18):
    print("not eligible for vote",a)
elif(a>=18):
    print("eligible for vote",a)


