def FreqEq(s1,s2):
    if len(s1)!=len(s2):
        return False
    # d1={}
    # for i in range(len(s1)):
    #     d1[s1[i]]=d1.get(s1[i],0)+1
    #     d1[s2[i]]=d1.get(s2[i],0)-1
    # return not max(d1.values())
    l1=[0]*26
    for i in range(len(s1)):
        index=ord(s1[i])-ord('a')
        l1[index]+=1
        index=ord(s2[i])-ord('a')
        l1[index]-=1
    return not max(l1)

# s1,s2=input().split()
s1,s2='aacb','abca'
print(FreqEq(s1,s2))