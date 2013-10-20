get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  

  #Return a JSON object the server with a random color and cell number
  
  #JSON (JavaScript Object Notation) is a lightweight data-interchange format.
  #Build on collections of name-value pairs
  #and unordered list values (e.g. array list)

  content_type :json
  # In JSON, objects are written in curly brackets
  {cell: cell, color: color}.to_json
end