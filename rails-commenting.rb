# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) this a controler for the BlogPost model
class BlogPostsController < ApplicationController
  def index
    # ---2) gets all the BlogPosts
    @posts = BlogPost.all
  end

  def show
    # ---3) gets a specifi BlogPost by the id
    @post = BlogPost.find(params[:id])
  end

  # ---4) sends the user to the form which the user can create a new BlogPost
  def new
    @post = Post.new
  end

  def create
    # ---5) creates a BlogPost in the data base and permitted params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) populate an edit form page and fills in the input fields with the data of the data found by id
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) the current blog post found by id will be updated based of what was field into the input field
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this will redirect the user to the page that has all the posts
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is used so ruby knows any code after this line is not meant for any user to see.
  private
  def blog_post_params
    # ---10) this allows ruby to know what collumns can be editted.
    params.require(:blog_post).permit(:title, :content)
  end

end
