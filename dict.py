'''a={1:"shyam",4:"kiran",3:"jyoti","pooja":56}
print(a[4]) '''

'''a={"name":["pooja" , "preeti","priyanshi","simran"],"class":[5,6,7,8]}
print(a) '''


#nested dictionary

'''a={"class1":["priyanshi","pooja"],"class2":{"anshul":23, "rishav":75}}
print(a["class2"]["anshul"])

'''


#a={1:"ram",2:"shyam"}
#print(a.get(2))
#a.popitem()


#a={1:"ram",2:"shyam"}

'''a={}
v={'ram','shyam','kriti'}
n=23
a=a.fromkeys(v,n) '''


'''
a={1:"ram",2:"shyam"}
a.setdefault(3,"preeti")
print(a)'''

 
'''a={1:"ram",2:"shyam"}
a.update({1:"preeti"})
print(a)  '''

#ultrate 
a={"name":["pooja" , "preeti","priyanshi","simran"],"class":[5,6,7,8]}
for b in a:
      print(b)
