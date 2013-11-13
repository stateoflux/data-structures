var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size];
    size++;
  };

  instance.dequeue = function(){
    var result = storage[0];

    for (var i = 1; i < storage.length; i++) {
      storage[i - 1] = storage[i];
    }
    delete storage[storage.length - 1];
    if (size > 0)
    size--;
    return result; 
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
