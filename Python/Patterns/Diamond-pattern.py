{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 39,
   "id": "30e6e093",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "* * * * \n",
      "* * * \n",
      "* * \n",
      "* \n"
     ]
    }
   ],
   "source": [
    "n=4\n",
    "for i in range(n, 0,-1):\n",
    "  for j in range(0,i):\n",
    "    print(\"*\", end=\" \")\n",
    "  print()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 40,
   "id": "597ad3c6",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "\n",
      "* \n",
      "* * \n",
      "* * * \n",
      "* * * * \n",
      "* * * * * \n",
      "* * * * \n",
      "* * * \n",
      "* * \n",
      "* \n"
     ]
    }
   ],
   "source": [
    "n=int(input(\"Enter length of pattern :\"))\n",
    "for i in range(n):\n",
    "  for j in range(i):\n",
    "    print(\"*\", end=\" \")\n",
    "  print()\n",
    "for i in range(n):\n",
    "  for j in range(n-i):\n",
    "    print(\"*\", end=\" \")\n",
    "  print()"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.13.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
