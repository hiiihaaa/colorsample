class ColorsController < ApplicationController
  def index
    @numbers = [*1..24]
  end
end
