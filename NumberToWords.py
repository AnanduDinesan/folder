def NumToWord(n):
    BelowTwenty=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
    Tens=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninty"]

    if n<20:
        return BelowTwenty[n]
    elif n<100:
        return Tens[int(str(n)[0])]+" "+BelowTwenty[int(str(n)[1])]
    elif n<1000:
        return BelowTwenty[int(str(n)[0])]+" Hundred "+Tens[int(str(n)[1])]+" "+BelowTwenty[int(str(n)[2])]


num=int(input())
Others=[""," Thousand"," Million"," Billion"]
words=[]
i=0
if num:
    while num:
        n=num%1000
        s=NumToWord(n)
        if s:
            words.append(s+Others[i])
        num=num//1000
        i+=1
    words.reverse()
    print(" ".join(words))
else:
    print("Zero")