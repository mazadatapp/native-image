package com.nativeimage;

import android.net.Uri;

import androidx.annotation.NonNull;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.makeramen.roundedimageview.RoundedImageView;
import android.graphics.Color;
import java.io.File;

public class NativeImageViewManager extends SimpleViewManager<RoundedImageView> {
  public static final String REACT_CLASS = "NativeImageView";
  ThemedReactContext reactContext;

  @Override
  @NonNull
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  @NonNull
  public RoundedImageView createViewInstance(ThemedReactContext reactContext) {
    this.reactContext = reactContext;
    return new RoundedImageView(reactContext);
  }

  @ReactProp(name = "url")
  public void setUrl(RoundedImageView image, String url) {

    image.setScaleType(ImageView.ScaleType.CENTER_CROP);
    image.setBackgroundColor(Color.TRANSPARENT);
    
    if (url.startsWith("http")) {
      Glide.with(image).load(url).into(image);
    } else {
      if(url.startsWith("file://")){
        url = url.replace("file://","");
      }
      url =url.replace(" ", "\\ ");
      image.setImageURI(Uri.fromFile(new File(url)));
    }
  }

  @ReactProp(name = "radius")
  public void setRadius(RoundedImageView image, String radius) {
    image.setCornerRadius(Float.parseFloat(radius));
  }
}
