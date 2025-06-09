l1=[1,2,2,3]
l1.sort()
count=1
for i in range(1,len(l1)):
    if l1[i]==l1[i-1]:
        count+=1
        if count>len(l1)//2:
            break
    else:
        count=1
print(l1[i-1] if count>len(l1)//2 else 0)
