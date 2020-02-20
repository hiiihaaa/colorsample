class ColorsController < ApplicationController
  def index
    gon.themeColor=[]
    # ベースの色をNo.1〜96で定義
    for num in 1..96 do
      if num <= 17 then     
        gon.themeColor << {rgbR:255, rgbG:(num-1)*16-1, rgbB: 0}
      elsif num <= 33 then
        gon.themeColor << {rgbR: 255 - ((num-17)*16), rgbG:255, rgbB:0}
      elsif num <= 49 then
        gon.themeColor << {rgbR: 0, rgbG:255, rgbB:(num-33)*16-1}
      elsif num <= 65 then
        gon.themeColor << {rgbR: 0, rgbG:255 - (num-49)*16, rgbB:255}
      elsif num <= 81 then
        gon.themeColor << {rgbR:(num-65)*16-1,rgbG:0,rgbB:255}
      else
        gon.themeColor << {rgbR:255,rgbG:0,rgbB:255-(num-81)*16}
      end
    end
  end



end
