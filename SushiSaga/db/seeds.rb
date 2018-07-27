
sushi_data = [
	{name: "Genki Toro", img_url: "https://www.themebeta.com/media/cache/400x225/files/chrome/images/201605/25/06f7d19682ee2b8b3c31f9e3136fdc24.png", price: 25},
	{name: "Tsundere Ebi", img_url: "https://sushistickers.com/img/sushi-slice_75.png", price: 15},
	{name: "Oh Sake", img_url: "https://sushistickers.com/img/sushi-slice_29.png", price: 10},
	{name: "Tako Supreme", img_url: "https://sushistickers.com/img/sushi-slice_99.png", price: 20},
	{name: "Kawaii Maguro", img_url: "https://i.imgur.com/RJGr3Xs.png", price: 10}
]

previous = nil

100.times do 
	new_sushi = sushi_data.sample
	while previous == new_sushi
		new_sushi = sushi_data.sample 
	end
	Sushi.create(new_sushi)
	previous = new_sushi
end


