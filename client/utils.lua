SendMessage = function(method, data)
  SendNUIMessage({
    app = 'SelectMenu',
    method = method, 
    data = data
  })
end