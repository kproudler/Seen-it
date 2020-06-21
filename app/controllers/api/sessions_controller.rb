class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if user.nil?
            render json: 'Crednetials are wrong'
        else
            login!(user)
            render "api/users/show"
        end
    end

    def new
    end

end
