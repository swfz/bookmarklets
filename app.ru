# coding: utf-8

class SimpleServer
  def call(env)
    [
      200,
      {'Content-Type' => 'text/html'},
      ['<html><body>Hello World!</body></html>']
    ]
  end
end

use Rack::Static, :urls => ["/bookmarklets"]

run SimpleServer.new
