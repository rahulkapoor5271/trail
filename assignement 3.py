# a = [1, 2,7,8,3, 4, 5]
# b = int(input("enter any integer:- "))


#sum of all integer elements in the list
'''a=[1,2,3,4,5]
sum=0
for i in a:
      sum+=i
print(sum)'''



#length of list without using len()
'''a=[1,2,3,4,5,6,78,98,100]
count=0
for i in a:
    count = count+1
print(f"len of list:{count}")'''

#check wheather the  user element is prsesnt in the list or not

a=[7,8,9,2,6,5,4,3,2,1,8,5,9]
b=int(input("enter any integer:-  "))
print(f" element is present in the list: {b}")
count=0
for i in a:
      if i==b:
            count=count+1
print(f"number of occurence: {count}")


#swap.list
'''a=[1,2,3,4,5,6]
t=len(a)
temp=a[0]
a[0]=a[-5]
a[-5]=temp
for i in range(t):
      print(a[i])
'''
