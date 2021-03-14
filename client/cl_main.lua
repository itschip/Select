-- Create a export that you can use use client side

-- I SHOULD ACTAULLY UHM DO THIS IN TYPESCRIPT 

-- should be a table[array]
exports('CreateSelectMenu', function(elements)
  print('Creating menu...')

  SendMessage('setData', elements)
end)

RegisterNUICallback('CloseSelectMenu', function(data, cb)
  SendMessage('setVisibility', false)
  
  cb()
end)

-- allows creation menu from server side
RegisterNetEvent('CreateSelectMenu')
AddEventHandler('CreateSelectMenu', function(elements)
  print('Creating menu...')

  SendMessage('setData', elements)
end)



--[[ Example:

exports.Select.CreateSelectMenu(table)

]]
