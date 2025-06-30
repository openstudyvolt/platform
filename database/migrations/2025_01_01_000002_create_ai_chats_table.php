<?php

use App\Enums\ChatStatus;
use App\Models\User;
use App\Models\Summary;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ai_chats', static function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->index()->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Summary::class)->nullable()->index()->constrained()->cascadeOnDelete();
            $table->text('user_message');
            $table->text('ai_response')->nullable();
            $table->json('context')->nullable(); // Additional context for AI
            $table->string('model_used')->nullable(); // Which AI model was used
            $table->integer('tokens_used')->default(0);
            $table->decimal('processing_time', 8, 3)->nullable(); // in seconds
            $table->string('status')->default(ChatStatus::PENDING->value);
            $table->timestamps();

            $table->index(['user_id', 'created_at']);
            $table->index(['summary_id', 'created_at']);
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ai_chats');
    }
};
