# encoding: utf-8

class SimpleServer
  def call(env)
    contents = File.open('./README.md', 'r:utf-8').read.gsub(/d1i7g5i1n6yjvy.cloudfront.net\/bookmarklets/,"#{env['HTTP_HOST']}/bookmarklets")
    p contents.encoding
    [
      200,
      {'Content-Type' => 'text/plain;charset=utf-8'},
      [contents]
    ]
  end
end

use Rack::Static, :urls => ["/bookmarklets"]

run SimpleServer.new
