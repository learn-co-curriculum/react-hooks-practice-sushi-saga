class Api::V1::SushisController < ApplicationController
	def index
		render json: Sushi.all
	end
end