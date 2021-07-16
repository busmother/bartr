# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
# ActionCable.server.config.allowed_request_origins = ['http://localhost:3001']

run Rails.application
Rails.application.load_server
