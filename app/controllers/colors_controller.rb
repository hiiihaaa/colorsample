class ColorsController < ApplicationController
  def index
    gon.themeColor=[]
    def nozero(num)
      if num <0 then
        num = 0
      else
        num = num
      end
    end
    # ベースの色をNo.0〜95で定義
    for num in 0..95 do
      if num <= 16 then     
        gon.themeColor << {rgbR:255, rgbG:nozero((num)*16-1), rgbB: 0}
      elsif num <= 32 then
        gon.themeColor << {rgbR: 255 - ((num-16)*16), rgbG:255, rgbB:0}
      elsif num <= 48 then
        gon.themeColor << {rgbR: 0, rgbG:255, rgbB:nozero((num-32)*16-1)}
      elsif num <= 64 then
        gon.themeColor << {rgbR: 0, rgbG:255 - (num-48)*16, rgbB:255}
      elsif num <= 80 then
        gon.themeColor << {rgbR:nozero((num-64)*16-1),rgbG:0,rgbB:255}
      else
        gon.themeColor << {rgbR:255,rgbG:0,rgbB:255-(num-80)*16}
      end
    end
  end



end
