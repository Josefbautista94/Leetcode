class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        dictionary = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }   

        for char in s:

            if char in dictionary:
                if not stack:
                    return False
                top = stack.pop()
                if(top!=dictionary[char]):
                    return False
            else:
                stack.append(char) 

        return len(stack) == 0   