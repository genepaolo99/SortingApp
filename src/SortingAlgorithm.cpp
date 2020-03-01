#include <iostream>
#include <vector>
#include "time.h"
using namespace std;

class SortingAlgorithm{
private:
  int size;
  vector<int> array;
public:
  SortingAlgorithm();
  void createNewArray();
  void printArray();
  void insertionSort();
};

SortingAlgorithm::SortingAlgorithm(){
  size=10;
}
void SortingAlgorithm::createNewArray(){
  srand(time(NULL));
  for (int x = 0;x<size;x++){
    //random num 1-1000
    array.push_back(rand() % 1000+1);
  }
}
void SortingAlgorithm::printArray(){
  for (int x = 0;x<size;x++){
    cout << array[x] << endl;
  }
}
void SortingAlgorithm::insertionSort(){
  //TC: O(n^2)
  for (int x = 1;x<size;x++){
    int temp = array[x];
    int y = x-1;
    while(y>=0 && array[y]>temp){
      array[y+1] = array[y];
      y -= 1;
    }
    array[y+1] = temp; //Gets put in the right pos
  }
}
//Test Algorithms
int main(){
  SortingAlgorithm sa1;
  sa1.createNewArray();
  sa1.printArray();
  cout << endl;
  sa1.insertionSort();
  sa1.printArray();
  return 0;
}
